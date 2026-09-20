/**
 * SIM-OR RSUD KOJA V11 - HTTP/JSONP bridge
 *
 * Frontend is hosted on GitHub Pages, while this Apps Script project
 * remains the private application backend for Google Sheets.
 *
 * JSONP is used because Apps Script Web Apps do not provide a general
 * user-configurable CORS response-header API. The frontend therefore
 * calls this endpoint through a dynamically-created <script> tag.
 */

function handleApiGet_(e) {
  var params = (e && e.parameter) ? e.parameter : {};
  var action = String(params.action || 'health');
  var callback = String(params.callback || '');
  var args = [];

  try {
    if (params.args) {
      args = JSON.parse(params.args);
      if (!Array.isArray(args)) throw new Error('Parameter args harus berupa array.');
    }
    var result = dispatchAction_(action, args);
    if (callback) {
      validateCallback_(callback);
      return jsonpOutput_(callback, result);
    }
    return jsonOutput_(result);
  } catch (err) {
    var payload = { ok:false, message: publicError_(err) };
    if (callback) {
      try {
        validateCallback_(callback);
        return jsonpOutput_(callback, payload);
      } catch (ignore) {}
    }
    return jsonOutput_(payload);
  }
}

function doPost(e) {
  try {
    var raw = e && e.postData ? String(e.postData.contents || '') : '';
    var body = raw ? JSON.parse(raw) : {};
    var action = String(body.action || 'health');
    var args = Array.isArray(body.args) ? body.args : [];
    return jsonOutput_(dispatchAction_(action, args));
  } catch (err) {
    return jsonOutput_({ ok:false, message:publicError_(err) });
  }
}

function dispatchAction_(action, args) {
  switch (action) {
    case 'health': return apiHealth();
    case 'apiGetConfig': return apiGetConfig();
    case 'apiSignUp': return apiSignUp(args[0] || {});
    case 'apiLogin': return apiLogin(args[0] || {});
    case 'apiLogout': return apiLogout(args[0] || '');
    case 'apiMe': return apiMe(args[0] || '');
    case 'apiGetMasters': return apiGetMasters(args[0] || '');
    case 'apiGetEntries': return apiGetEntries(args[0] || '', args[1] || {});
    case 'apiCreateEntry': return apiCreateEntry(args[0] || '', args[1] || {});
    case 'apiUpdateEntry': return apiUpdateEntry(args[0] || '', args[1] || '', args[2] || {});
    case 'apiDeleteEntry': return apiDeleteEntry(args[0] || '', args[1] || '');
    case 'apiDeleteBulk': return apiDeleteBulk(args[0] || '', args[1] || {});
    case 'apiUpdateCheck': return apiUpdateCheck(args[0] || '', args[1] || '', args[2] || '', args[3], args[4]);
    case 'apiGetAudit': return apiGetAudit(args[0] || '', args[1] || '', args[2] || 200);
    default: throw new Error('ACTION_NOT_FOUND');
  }
}

function apiHealth() {
  return { ok:true, service:APP.NAME, version:APP.VERSION, timestamp:nowIso_() };
}

function jsonOutput_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

function jsonpOutput_(callback, payload) {
  var json = JSON.stringify(payload)
    .replace(/<\u002fscript/gi, '<\\/script')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
  return ContentService
    .createTextOutput(callback + '(' + json + ');')
    .setMimeType(ContentService.MimeType.JAVASCRIPT);
}

function validateCallback_(callback) {
  if (!/^[A-Za-z_$][0-9A-Za-z_$]{0,80}$/.test(callback)) {
    throw new Error('INVALID_CALLBACK');
  }
}

function publicError_(err) {
  var message = err && err.message ? String(err.message) : String(err || 'Terjadi kesalahan.');
  if (message === 'AUTH_REQUIRED') return 'Sesi login tidak valid atau sudah berakhir. Silakan login kembali.';
  if (message === 'ACTION_NOT_FOUND') return 'Permintaan API tidak dikenali.';
  if (message === 'INVALID_CALLBACK') return 'Callback API tidak valid.';
  return message.slice(0, 500);
}

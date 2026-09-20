const APP = {
  NAME: 'SIM-OR RSUD KOJA',
  VERSION: 'V11',
  SPREADSHEET_ID: '1LxWnNv2v6ZhEfkLfT47GuGi_d18RWtYWC6C9F0V0JoU',
  SESSION_HOURS: 8,
  REMEMBER_DAYS: 30,
  PASSWORD_ITERATIONS: 12000,
};

const SHEETS = {
  USERS: 'USERS',
  OPERASI: 'OPERASI',
  AUDIT: 'AUDIT_LOG',
  SESSIONS: 'SESSIONS',
  MASTER: 'MASTER',
};

const ROOM_MAP = {
  'OK 3B': 'Ns. Evaristo Menezes, S.Kep',
  'OK 5D': 'Ns. Etti Manurung, S.Kep',
  'OK 4C': 'Ns. Kholisotus Sholihah, S.Kep',
};

const ENTRY_FIELDS = [
  'jamDatangPreOp','tanggal','nama','usia','jenisKelamin','nomorRM','jamMulaiOperasi',
  'kamarOperasi','jenisOP','diagnosaPreOP','tindakan','diagnosaPostOP','jenisAnestesi','ASA',
  'dokterAnestesi','dokterOperator','dokterPendamping','asistenAnestesi','asistenOperator',
  'perawatInstrumen','perawatSirkuler','jamMasukRR','ruanganEvaluasi'
];

const MASTER = {
  jenisKelamin: ['L','P'],
  jenisOP: ['ELEKTIF','CITO'],
  jenisAnestesi: ['GA','SPINAL','IV','SEDASI','LOKAL','BLOK'],
  ASA: ['1','2','3','4','5','6'],
  kamarOperasi: ['OK1','OK2','OK3','OK4','OK5','OK6'],
  ruanganEvaluasi: ['OK 3B','OK 5D','OK 4C'],
  dokterAnestesi: [
    'dr. Eva, Sp.An','dr. Raden Hari, Sp.An','dr. Jamalul Adil, Sp.An','dr. Louis, Sp.An',
    'dr. Girhanif Amri Yunda, Sp. An','dr. Hanna, Sp.An','dr. Robert Hotasi, Sp.An'
  ],
  dokterOperator: [
    'dr. Hendar, SP.OT','dr. Heka, SP.OT','dr. Kusnawara, SP.OG','dr. Seindy, Sp.OG',
    'dr. Nur Hasan, Sp.BS','dr. Harris, Sp.BS','dr. Nunki, Sp.OG','dr. Elba, Sp.OG',
    'dr. Galang, Sp.BTKv','dr. Faiz Sp.BTKV','dr. Fanani, Sp.B','dr. Bram, Sp.OG',
    'dr. Andri, Sp.B','dr. Aroyan, Sp.THT.KL','dr. Irma, Sp.THT.KL','dr. Puri, Sp.BP',
    'dr. Ditta, Sp.BP','dr. Roger, Sp.KK','dr. Putu Mira, Sp.OT','dr. Rinto Sp.U',
    'dr. Khadijah, Sp.KK','dr. Yusak, Sp.BD','dr. Rita, Sp.P','drg. Ghina Humaira, Sp.BM',
    'dr. Juniarto Sp.OT','dr. Christopher Rico Andrian, Sp.B','dr. Widya, SP.M'
  ],
};

const RESIDEN = [
  'Andini Sulistianingrum, S.Tr.Kes','Anggia Dwi Puspita Sari, A.Md.Kep','Anggun Yunisda Ningrom, A.Md. Kep',
  'Anjani Nova Sarah, A.Md. Kep','Ardhia Ayu Regita Suprapto Putri, Amd. Pa','Ari Purwaningsih, AMK',
  'Arief Riandy Sulistyono, A.Md. Kep','Arif Budiman, A.Md.PA','Ns. Aris Sunandar, S.Kep','Bayu Doni Wicaksono, A.Md. Kep',
  'Candra Devi Kumalasari, S. Tr. Kep','Ceptian Dwi Hidayat, A.Md. Kep','Chrisita Oktovira Sumitra Amd.PA','Dara Oktavia, A.Md. Kep',
  'Debby Simatupang, A.Md. Kep','Devy Handayani, A.Md.Kep','Dian Puspa, A.Md. Kep','Djoko Kisharyanto, AMK',
  'Evaristo Menezes,Ns.S.Kep','Fadzniy Khafiyya, A.Md. Kep','Fendi Warsito, A.Md. Kep','Fitridawati, A.Md. Kep',
  'Fujiati Fajar, A.Md. Kep','Ganis Pradhana, A.Md. Kep','Haris M Khadafi, A.Md. PA','Hernintia Aulia Aini Puspitawati, S.Tr. Kes',
  'Imam Riyadi, A.Md. Kep','Masruroh, A.Md. Kep','Maurist Agustara Lumban R, A.Md. Kep','Meike Asni Yanti, A.Md. Kep',
  'Melati Sari Dewi, A.Md. Kep','Melia Rizka, S.Tr.Kes','MHD Satria Irvan, A.Md. Kep','Muhamad Hasbi Yusuf, A.Md. Kep',
  'Muhamad Rahman Ansori, A.Md. Kep','Mustofa, Ns.S.Kep','Nadiratul Husni, S.Tr.Kes','Nafissa Almandita, S.Tr.Kep., Ners',
  'Nia Apriliyanti, AMK','Nico Teo Pratama, A.Md. Kep','Ns. Ali Maghfur, S.Kep','Ns. Arifudin S.Kep','Ns. Bela Novi Anggara, S.Kep',
  'Ns. Etti Manurung, S.Kep','Ns. Kholisotus Sholihah, SKep','Ns. Mercu Neza, S.Kep','Ns. Nardi, S. Kep',
  'Ns. Nurhayati Rusli, S.Kep','Ns. Palupi Mardika,S.Kep','Ns. Reni Oktaria Mulyani, S.Kep','Ns. Retno Yuli Dwiningrum, S.Kep',
  'Ns. Sofiana Sri Nasa, S.Kep','Ns. Susanti Oktaria, Skep','Ns. Windo Hariadi Wijaya, S.Kep','Nur Hidayat, A.Md. Kep',
  'Nur Komalasari, AMK','Nurhayati Rominar, A.Md. Kep','Qomariah A.Md. Kep','Rahmat Aprianto, A.Md. Kep',
  'Randa Septiadi, A.Md. Kep','Ratnengsih, A. Md. Kep','Rentawati M. Purba, A.Md. Kep','Riani Primaningsih, A.Md. Kep',
  'Ricky Fauzi Ginanjar, AMK','Ridwan Agung, A.Md. Kep','Rizka Eldiana, S.Tr.Kes','Selvi Restia Amanda Puteri, A.Md. Kep',
  'Sigit Purnomo, A.Md. Kep','Sintia Priwanti, AMK','Siti Aminah, A.Md. PA','Siti Nurjanah, AMK','Sri Muhyani, A.Md. Kep',
  'Sri Wulandari Setianingsih, A.Md. Kep','Suryanto, A.Md. Kep','Tyas Ratna Puri, AMK','Yulia Nurjanah, A. Md. Kep','Zakki Maulana, A.Md. Kep'
];

const PENATA_ANESTESI = [
  'Anjani Nova Sarah, Amk','Fadzniy Khafiyya, Amk','Haris Muhammad K, Amd.PA','Chrisita Oktovira S, Amd.PA',
  'Meike Asniyanti, Amd.PA','Ardhia Ayu RSP, Amd. PA','Dian Puspa, Amd.PA','Ganis Pradhana, Amk',
  'Ariif Budiman, Amd. PA','Siti Aminah, Amd. PA','Ratnengsih, Amd. PA','Chandra Devi K, S. Tr. Kep',
  'Yulia Nurjanah, Amd. PA','Anggun Yunisda N, Amd. PA','Andini Sulistianum, S.Tr.Kes','Melia, S.Tr.Kep',
  'Hernitia Aulia, STR.Kes','Rizka, S.Tr.Kes'
];

const PERAWAT = [
  'Anggia Dwi Puspita Sari, A.Md.Kep','Arief Riandy Sulistyono, A.Md. Kep','Ns. Aris Sunandar, S.Kep',
  'Bayu Doni Wicaksono, A.Md. Kep','Ceptian Dwi Hidayat, A.Md. Kep','Dara Oktavia, A.Md. Kep','Debby Simatupang, A.Md. Kep',
  'Devy Handayani, A.Md.Kep','Djoko Kisharyanto, AMK','Evaristo Menezes,Ns.S.Kep','Fendi Warsito, A.Md. Kep',
  'Fitridawati, A.Md. Kep','Fujiati Fajar, A.Md. Kep','Imam Riyadi, A.Md. Kep','Masruroh, A.Md. Kep',
  'Maurist Agustara Lumban R, A.Md. Kep','Melati Sari Dewi, A.Md. Kep','MHD Satria Irvan, A.Md. Kep',
  'Muhamad Hasbi Yusuf, A.Md. Kep','Muhamad Rahman Ansori, A.Md. Kep','Mustofa, Ns.S.Kep','Nafissa Almandita, S.Tr.Kep., Ners',
  'Nia Apriliyanti, AMK','Nico Teo Pratama, A.Md. Kep','Ns. Ali Maghfur, S.Kep','Ns. Arifudin S.Kep','Ns. Bela Novi Anggara, S.Kep',
  'Ns. Etti Manurung, S.Kep','Ns. Kholisotus Sholihah, SKep','Ns. Mercu Neza, S.Kep','Ns. Nardi, S. Kep',
  'Ns. Nurhayati Rusli, S.Kep','Ns. Palupi Mardika,S.Kep','Ns. Reni Oktaria Mulyani, S.Kep','Ns. Retno Yuli Dwiningrum, S.Kep',
  'Ns. Sofiana Sri Nasa, S.Kep','Ns. Susanti Oktaria, Skep','Ns. Windo Hariadi Wijaya, S.Kep','Nur Hidayat, A.Md. Kep'
];

function doGet(e) {
  return handleApiGet_(e);
}

function setupDatabase() {
  const ss = SpreadsheetApp.openById(APP.SPREADSHEET_ID);
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    ensureSheet_(ss, SHEETS.USERS, ['id','username','email','fullName','salt','passwordHash','role','active','createdAt','updatedAt']);
    ensureSheet_(ss, SHEETS.OPERASI, [
      'id','status','createdAt','updatedAt','createdByUsername','createdByName','updatedByUsername','updatedByName',
      'collector','validator','jamDatangPreOp','tanggal','nama','usia','jenisKelamin','nomorRM','jamMulaiOperasi','kamarOperasi',
      'jenisOP','diagnosaPreOP','tindakan','diagnosaPostOP','jenisAnestesi','ASA','dokterAnestesi','dokterOperator',
      'dokterPendamping','asistenAnestesi','asistenOperator','perawatInstrumen','perawatSirkuler','jamMasukRR','ruanganEvaluasi','checksJson'
    ]);
    ensureSheet_(ss, SHEETS.AUDIT, ['id','timestamp','action','entryId','patient','rm','username','userName','changedFields','oldValues','newValues','note']);
    ensureSheet_(ss, SHEETS.SESSIONS, ['tokenHash','userId','createdAt','expiresAt','remember']);
    const masterSheet = ensureSheet_(ss, SHEETS.MASTER, ['type','value','sort','active']);
    if (masterSheet.getLastRow() < 2) {
      const rows = [];
      Object.entries(MASTER).forEach(([type, values]) => values.forEach((v,i)=>rows.push([type,v,i+1,true])));
      [ ['dokterPendamping','Tidak ada',0,true], ...MASTER.dokterAnestesi.map((v,i)=>['dokterPendamping',v,i+10,true]), ...MASTER.dokterOperator.map((v,i)=>['dokterPendamping',v,i+100,true]) ]
        .forEach(r=>rows.push(r));
      RESIDEN.forEach((v,i)=>rows.push(['residen',v,i+1,true]));
      PENATA_ANESTESI.forEach((v,i)=>rows.push(['penataAnestesi',v,i+1,true]));
      PERAWAT.forEach((v,i)=>rows.push(['perawat',v,i+1,true]));
      if (rows.length) masterSheet.getRange(2,1,rows.length,4).setValues(rows);
    }
    [SHEETS.USERS,SHEETS.OPERASI,SHEETS.AUDIT,SHEETS.SESSIONS,SHEETS.MASTER].forEach(n=>formatSheet_(ss.getSheetByName(n)));
    return {ok:true,message:'Database SIM-OR V11 siap digunakan.',spreadsheetId:APP.SPREADSHEET_ID,sheets:Object.values(SHEETS)};
  } finally { lock.releaseLock(); }
}

function apiGetConfig() {
  return {ok:true,app:{name:APP.NAME,version:APP.VERSION},roomMap:ROOM_MAP};
}

function apiGetMasters(token) {
  const auth = requireAuth_(token);
  const sheet = SpreadsheetApp.openById(APP.SPREADSHEET_ID).getSheetByName(SHEETS.MASTER);
  const rows = valuesAsObjects_(sheet);
  const out = {};
  rows.filter(r=>String(r.active)!=='false').forEach(r=>{
    const type = String(r.type || '');
    if (!type) return;
    if (!out[type]) out[type] = [];
    out[type].push(r.value);
  });
  return ok_({masters:out});
}

function apiSignUp(payload) {
  ensureReady_();
  const b = payload || {};
  const username = normalizeUsername_(b.username);
  const email = text_(b.email,160).toLowerCase();
  const fullName = text_(b.fullName,120);
  const password = String(b.password || '');
  if (!/^[a-z0-9._-]{3,40}$/.test(username)) return fail_('Username 3–40 karakter: huruf kecil, angka, titik, garis bawah atau strip.');
  if (!/^\S+@\S+\.\S+$/.test(email)) return fail_('Format email tidak valid.');
  if (fullName.length<2) return fail_('Nama lengkap wajib diisi.');
  if (password.length < 8) return fail_('Password minimal 8 karakter.');
  const lock=LockService.getScriptLock();lock.waitLock(30000);
  try {
    const sh=sheet_(SHEETS.USERS), users=valuesAsObjects_(sh);
    if(users.some(u=>u.username===username)) return fail_('Username sudah digunakan.');
    if(users.some(u=>String(u.email).toLowerCase()===email)) return fail_('Email sudah terdaftar.');
    const now=nowIso_(), hp=hashPassword_(password);
    sh.appendRow([makeId_('USR'),username,email,fullName,hp.salt,hp.hash,'USER',true,now,now]);
    return ok_({message:'Akun berhasil dibuat. Silakan login.'});
  } finally {lock.releaseLock();}
}

function apiLogin(payload) {
  ensureReady_();
  const b=payload||{}, username=normalizeUsername_(b.username), password=String(b.password||''), remember=Boolean(b.remember);
  if(!username||!password)return fail_('Username dan password wajib diisi.');
  const users=valuesAsObjects_(sheet_(SHEETS.USERS));
  const user=users.find(u=>u.username===username&&String(u.active)!=='false');
  if(!user||!verifyPassword_(password,user.salt,user.passwordHash))return fail_('Username atau password salah.');
  const token=Utilities.getUuid().replace(/-/g,'')+Utilities.getUuid().replace(/-/g,''), created=Date.now();
  const ttl=remember?APP.REMEMBER_DAYS*86400000:APP.SESSION_HOURS*3600000;
  const expires=new Date(created+ttl).toISOString();
  const sh=sheet_(SHEETS.SESSIONS); cleanupSessions_(sh); sh.appendRow([sha256_(token),user.id,new Date(created).toISOString(),expires,remember]);
  writeAudit_({action:'LOGIN',username:user.username,userName:user.fullName,note:'Login berhasil'});
  return ok_({token,user:{id:user.id,username:user.username,email:user.email,fullName:user.fullName,role:user.role},loginAt:new Date(created).toISOString(),expiresAt:expires});
}

function apiLogout(token) {
  const t=String(token||'');
  if(t){
    const sh=sheet_(SHEETS.SESSIONS), rows=sh.getDataRange().getValues(), idx=rows.findIndex((r,i)=>i>0&&String(r[0])===sha256_(t));
    let actor={username:'',fullName:''};
    const auth=findSession_(t); if(auth)actor={username:auth.user.username,fullName:auth.user.fullName};
    if(idx>0)sh.deleteRow(idx+1);
    if(actor.username)writeAudit_({action:'LOGOUT',username:actor.username,userName:actor.fullName,note:'Logout'});
  }
  return ok_({});
}

function apiMe(token){ const a=requireAuth_(token); return ok_({user:safeUser_(a.user),loginAt:a.session.createdAt,expiresAt:a.session.expiresAt}); }

function apiGetEntries(token,filters){
  const a=requireAuth_(token), f=filters||{};
  let entries=readEntries_().filter(e=>e.status!=='DELETED');
  if(f.date)entries=entries.filter(e=>e.tanggal===String(f.date));
  if(f.ruanganEvaluasi)entries=entries.filter(e=>e.ruanganEvaluasi===String(f.ruanganEvaluasi));
  if(f.kamarOperasi)entries=entries.filter(e=>e.kamarOperasi===String(f.kamarOperasi));
  if(f.search){const q=String(f.search).toLowerCase();entries=entries.filter(e=>[e.nama,e.nomorRM,e.diagnosaPreOP,e.tindakan].some(v=>String(v||'').toLowerCase().includes(q)))}
  entries.sort((x,y)=>`${x.tanggal} ${x.jamMulaiOperasi}`.localeCompare(`${y.tanggal} ${y.jamMulaiOperasi}`));
  return ok_({entries,requestedBy:safeUser_(a.user)});
}

function apiCreateEntry(token,payload){
  const a=requireAuth_(token), entry=validateEntry_(payload||{});
  if(entry.error)return fail_(entry.error);
  const now=nowIso_(), id=makeId_('OR');
  const row={id,status:'ACTIVE',createdAt:now,updatedAt:now,createdByUsername:a.user.username,createdByName:a.user.fullName,updatedByUsername:a.user.username,updatedByName:a.user.fullName,collector:a.user.fullName,validator:ROOM_MAP[entry.ruanganEvaluasi]||'',...entry,checks:defaultChecks_()};
  const sh=sheet_(SHEETS.OPERASI);
  const lock=LockService.getScriptLock();lock.waitLock(30000);try{appendEntry_(sh,row);writeAudit_({action:'CREATE',entryId:id,patient:row.nama,rm:row.nomorRM,username:a.user.username,userName:a.user.fullName,changedFields:ENTRY_FIELDS,note:'Data operasi dibuat'});return ok_({entry:row});}finally{lock.releaseLock();}
}

function apiUpdateEntry(token,id,payload){
  const a=requireAuth_(token); const sh=sheet_(SHEETS.OPERASI), rowIndex=findRowById_(sh,id); if(rowIndex<2)return fail_('Data tidak ditemukan.');
  const before=rowToEntry_(sh,rowIndex), validated=validateEntry_(payload||{}); if(validated.error)return fail_(validated.error);
  const now=nowIso_(), updated={...before,...validated,updatedAt:now,updatedByUsername:a.user.username,updatedByName:a.user.fullName,collector:a.user.fullName,validator:ROOM_MAP[validated.ruanganEvaluasi]||'',checks:before.checks||defaultChecks_()};
  const lock=LockService.getScriptLock();lock.waitLock(30000);try{writeEntry_(sh,rowIndex,updated);const changed=diffFields_(before,updated);writeAudit_({action:'UPDATE',entryId:id,patient:updated.nama,rm:updated.nomorRM,username:a.user.username,userName:a.user.fullName,changedFields:changed,oldValues:pickFields_(before,changed),newValues:pickFields_(updated,changed),note:'Data operasi diperbarui'});return ok_({entry:updated,changedFields:changed});}finally{lock.releaseLock();}
}

function apiDeleteEntry(token,id){
  const a=requireAuth_(token), sh=sheet_(SHEETS.OPERASI), rowIndex=findRowById_(sh,id); if(rowIndex<2)return fail_('Data tidak ditemukan.');
  const before=rowToEntry_(sh,rowIndex); if(before.status==='DELETED')return fail_('Data sudah dihapus.');
  before.status='DELETED';before.updatedAt=nowIso_();before.updatedByUsername=a.user.username;before.updatedByName=a.user.fullName;
  const lock=LockService.getScriptLock();lock.waitLock(30000);try{writeEntry_(sh,rowIndex,before);writeAudit_({action:'DELETE',entryId:id,patient:before.nama,rm:before.nomorRM,username:a.user.username,userName:a.user.fullName,changedFields:['status'],oldValues:{status:'ACTIVE'},newValues:{status:'DELETED'},note:'Data operasi dihapus (soft delete)'});return ok_({});}finally{lock.releaseLock();}
}

function apiDeleteBulk(token,filters){
  const a=requireAuth_(token), f=filters||{}; if(!f.date||!f.ruanganEvaluasi)return fail_('Tanggal dan ruangan evaluasi wajib untuk penghapusan massal.');
  const lock=LockService.getScriptLock();lock.waitLock(30000);
  try {
    const sh=sheet_(SHEETS.OPERASI), rows=valuesAsObjects_(sh), removed=[];
    for(let i=0;i<rows.length;i++){const r=rows[i];if(r.status!=='DELETED'&&r.tanggal===String(f.date)&&r.ruanganEvaluasi===String(f.ruanganEvaluasi)){const actual=findRowById_(sh,r.id);if(actual>1){r.status='DELETED';r.updatedAt=nowIso_();r.updatedByUsername=a.user.username;r.updatedByName=a.user.fullName;writeEntry_(sh,actual,r);removed.push(r);}}}
    removed.forEach(r=>writeAudit_({action:'DELETE_BULK',entryId:r.id,patient:r.nama,rm:r.nomorRM,username:a.user.username,userName:a.user.fullName,changedFields:['status'],oldValues:{status:'ACTIVE'},newValues:{status:'DELETED'},note:`Penghapusan massal ${f.date} / ${f.ruanganEvaluasi}`}));
    return ok_({deleted:removed.length});
  } finally { lock.releaseLock(); }
}

function apiUpdateCheck(token,id,doc,index,value){
  const a=requireAuth_(token), allowed={minimal:10,eva:6,mutu:4,inform:17,site:3};
  if(!allowed[doc]||Number(index)<0||Number(index)>=allowed[doc])return fail_('Indikator tidak valid.');
  if(!(value===''||value===null||value===0||value===1))return fail_('Nilai indikator harus 0, 1, atau kosong.');
  const sh=sheet_(SHEETS.OPERASI), row=findRowById_(sh,id);if(row<2)return fail_('Data tidak ditemukan.');
  const lock=LockService.getScriptLock();lock.waitLock(30000);
  try {
    const e=rowToEntry_(sh,row); e.checks=e.checks||defaultChecks_(); if(!Array.isArray(e.checks[doc])||e.checks[doc].length!==allowed[doc])e.checks[doc]=Array(allowed[doc]).fill('');
    e.checks[doc][Number(index)]=(value===''||value===null)?'':Number(value);e.updatedAt=nowIso_();e.updatedByUsername=a.user.username;e.updatedByName=a.user.fullName;
    writeEntry_(sh,row,e); writeAudit_({action:'INDICATOR_UPDATE',entryId:id,patient:e.nama,rm:e.nomorRM,username:a.user.username,userName:a.user.fullName,changedFields:[`checks.${doc}[${index}]`],note:`Indikator ${doc} diperbarui`});
    return ok_({checks:e.checks});
  } finally { lock.releaseLock(); }
}

function apiGetAudit(token,entryId,limit){
  const a=requireAuth_(token), rows=valuesAsObjects_(sheet_(SHEETS.AUDIT));
  let logs=rows.filter(r=>!entryId||r.entryId===String(entryId));logs.sort((x,y)=>String(y.timestamp).localeCompare(String(x.timestamp)));
  logs=logs.slice(0,Math.min(Math.max(Number(limit||200),1),500)); return ok_({logs,requestedBy:safeUser_(a.user)});
}

function ensureReady_(){ const ss=SpreadsheetApp.openById(APP.SPREADSHEET_ID); if(!ss.getSheetByName(SHEETS.USERS))setupDatabase(); }
function ensureSheet_(ss,name,headers){
  let sh=ss.getSheetByName(name);if(!sh)sh=ss.insertSheet(name);
  if(sh.getLastRow()===0){sh.getRange(1,1,1,headers.length).setValues([headers]);sh.setFrozenRows(1);sh.getRange(1,1,1,headers.length).setFontWeight('bold');}
  return sh;
}
function formatSheet_(sh){ if(!sh)return;sh.setFrozenRows(1);sh.autoResizeColumns(1,Math.min(sh.getLastColumn(),20)); }
function sheet_(name){return SpreadsheetApp.openById(APP.SPREADSHEET_ID).getSheetByName(name)}
function valuesAsObjects_(sh){
  if(!sh||sh.getLastRow()<2)return [];
  const vals=sh.getDataRange().getValues(), headers=vals[0].map(String);
  return vals.slice(1).map(r=>Object.fromEntries(headers.map((h,i)=>[h,r[i]])));
}
function rowToEntry_(sh,rowIndex){const vals=sh.getRange(rowIndex,1,1,sh.getLastColumn()).getValues()[0], headers=sh.getRange(1,1,1,sh.getLastColumn()).getValues()[0].map(String);const r=Object.fromEntries(headers.map((h,i)=>[h,vals[i]]));if(r.checksJson)try{r.checks=JSON.parse(r.checksJson)}catch{r.checks=defaultChecks_()}else r.checks=defaultChecks_();delete r.checksJson;return coerceEntry_(r)}
function readEntries_(){return valuesAsObjects_(sheet_(SHEETS.OPERASI)).map(r=>{if(r.checksJson)try{r.checks=JSON.parse(r.checksJson)}catch{r.checks=defaultChecks_()}else r.checks=defaultChecks_();delete r.checksJson;return coerceEntry_(r)})}
function appendEntry_(sh,e){const headers=sh.getRange(1,1,1,sh.getLastColumn()).getValues()[0].map(String);sh.appendRow(headers.map(h=>h==='checksJson'?JSON.stringify(e.checks||{}):e[h]??''));}
function writeEntry_(sh,row,e){const headers=sh.getRange(1,1,1,sh.getLastColumn()).getValues()[0].map(String);sh.getRange(row,1,1,headers.length).setValues([headers.map(h=>h==='checksJson'?JSON.stringify(e.checks||{}):e[h]??'')]);}
function findRowById_(sh,id){if(!sh||sh.getLastRow()<2)return -1;const vals=sh.getRange(2,1,sh.getLastRow()-1,1).getValues().flat();const i=vals.findIndex(v=>String(v)===String(id));return i<0?-1:i+2}
function coerceEntry_(r){['usia','ASA'].forEach(k=>{if(r[k]!==''&&r[k]!=null)r[k]=Number(r[k])});return r}
function validateEntry_(b){
  const d={}; for(const k of ENTRY_FIELDS)d[k]=text_(b[k],k==='nama'?160:250);
  if(['jamDatangPreOp','tanggal','nama','usia','jenisKelamin','nomorRM','jamMulaiOperasi','kamarOperasi','jenisOP','diagnosaPreOP','tindakan','diagnosaPostOP','jenisAnestesi','ASA','dokterAnestesi','dokterOperator','asistenAnestesi','asistenOperator','perawatInstrumen','perawatSirkuler','jamMasukRR','ruanganEvaluasi'].some(k=>!String(d[k]).trim()))return {error:'Lengkapi semua field wajib pada form entri.'};
  if(!/^\d{2}:\d{2}$/.test(d.jamDatangPreOp)||!/^\d{4}-\d{2}-\d{2}$/.test(d.tanggal)||!/^\d{2}:\d{2}$/.test(d.jamMulaiOperasi)||!/^\d{2}:\d{2}$/.test(d.jamMasukRR))return {error:'Format tanggal/jam tidak valid.'};
  const age=Number(d.usia),asa=Number(d.ASA);if(!Number.isInteger(age)||age<0||age>150)return {error:'Usia harus 0–150 tahun.'};if(![1,2,3,4,5,6].includes(asa))return {error:'ASA harus 1–6.'};
  const allowed={jenisKelamin:MASTER.jenisKelamin,jenisOP:MASTER.jenisOP,jenisAnestesi:MASTER.jenisAnestesi,kamarOperasi:MASTER.kamarOperasi,ruanganEvaluasi:MASTER.ruanganEvaluasi,dokterAnestesi:MASTER.dokterAnestesi,dokterOperator:MASTER.dokterOperator,asistenAnestesi:PENATA_ANESTESI,asistenOperator:RESIDEN,perawatInstrumen:PERAWAT,perawatSirkuler:PERAWAT};
  for(const [k,v] of Object.entries(allowed))if(!v.includes(String(d[k])))return {error:`Pilihan ${k} tidak valid.`};
  d.usia=age;d.ASA=asa;d.dokterPendamping=d.dokterPendamping||'Tidak ada'; return d;
}
function defaultChecks_(){return {minimal:[0,0,1,0,1,1,1,1,1,1],eva:[0,0,1,1,1,0],mutu:[1,1,1,0],inform:Array(17).fill(1),site:[1,1,1]};}
function diffFields_(a,b){return ENTRY_FIELDS.concat(['kamarOperasi','ruanganEvaluasi']).filter((k,i,s)=>s.indexOf(k)===i&&JSON.stringify(a[k]??null)!==JSON.stringify(b[k]??null)).concat(JSON.stringify(a.checks||{})!==JSON.stringify(b.checks||{})?['checks']:[])}
function pickFields_(o,keys){const out={};keys.forEach(k=>out[k]=o[k]);return out}
function writeAudit_(x){const sh=sheet_(SHEETS.AUDIT);sh.appendRow([makeId_('AUD'),nowIso_(),x.action||'',x.entryId||'',x.patient||'',x.rm||'',x.username||'',x.userName||'',JSON.stringify(x.changedFields||[]),JSON.stringify(x.oldValues||{}),JSON.stringify(x.newValues||{}),x.note||''])}
function requireAuth_(token){const s=findSession_(token);if(!s)throw new Error('AUTH_REQUIRED');return s}
function findSession_(token){if(!token)return null;const sh=sheet_(SHEETS.SESSIONS);cleanupSessions_(sh);const hash=sha256_(token), rows=valuesAsObjects_(sh), r=rows.find(x=>String(x.tokenHash)===hash);if(!r)return null;const u=valuesAsObjects_(sheet_(SHEETS.USERS)).find(x=>String(x.id)===String(r.userId)&&String(x.active)!=='false');return u?{session:r,user:u}:null}
function cleanupSessions_(sh){if(!sh||sh.getLastRow()<2)return;const now=Date.now(), rows=sh.getRange(2,1,sh.getLastRow()-1,4).getValues();for(let i=rows.length-1;i>=0;i--){if(new Date(rows[i][3]).getTime()<=now)sh.deleteRow(i+2)}}
function hashPassword_(password){const salt=Utilities.getUuid().replace(/-/g,'')+Utilities.getUuid().replace(/-/g,'');let h=sha256_(salt+':'+password);for(let i=0;i<APP.PASSWORD_ITERATIONS;i++)h=sha256_(salt+':'+h);return {salt,hash:h}}
function verifyPassword_(password,salt,stored){let h=sha256_(String(salt)+':'+password);for(let i=0;i<APP.PASSWORD_ITERATIONS;i++)h=sha256_(String(salt)+':'+h);return h===String(stored)}
function sha256_(value){return bytesHex_(Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256,Utilities.newBlob(String(value)).getBytes()))}
function bytesHex_(bytes){return bytes.map(b=>(b<0?b+256:b).toString(16).padStart(2,'0')).join('')}
function makeId_(prefix){return prefix+'-'+Date.now()+'-'+Utilities.getUuid().slice(0,8)}
function nowIso_(){return new Date().toISOString()}
function normalizeUsername_(v){return text_(v,40).toLowerCase()}
function text_(v,max){return String(v??'').replace(/[\u0000-\u001f\u007f]/g,'').trim().slice(0,max||500)}
function safeUser_(u){return {id:u.id,username:u.username,email:u.email,fullName:u.fullName,role:u.role,active:u.active}}
function ok_(data){return {ok:true,...(data||{})}}
function fail_(message){return {ok:false,message:String(message)}}

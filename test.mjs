import assert from 'node:assert/strict';
import {parseDate,holidays,weekend,count,shift} from './dist/core.js';
import {locales} from './dist/locales.js';
const w=weekend([0,6]),h=holidays('2026-11-03');
assert.deepEqual(count('2026-10-26','2026-11-06',w,h).totals,{work:9,weekend:2,holiday:1});
assert.equal(shift('2026-10-30',1,w,new Set()),'2026-11-02');
assert.equal(shift('2026-11-02',-1,w,new Set()),'2026-10-30');
assert.equal(shift('2026-10-26',10,w,h),'2026-11-10');
assert.equal(shift('2026-10-31',0,w,h),'2026-10-31');
assert.equal(count('2024-02-28','2024-03-01',w,new Set()).totals.work,3);
assert.equal(count('2026-10-26','2026-10-26',w,h,false,false).rows.length,0);
assert.deepEqual(count('2026-10-31','2026-10-31',w,holidays('2026-10-31')).totals,{work:0,weekend:1,holiday:0});
for(let s of ['','2025-02-29','2026-13-01','1899-12-31','2026-01-00'])assert.throws(()=>parseDate(s));
assert.throws(()=>weekend([0,1,2,3,4,5,6]));assert.throws(()=>shift('2026-01-01','1.2',w,h));assert.throws(()=>count('2026-02-01','2026-01-01',w,h));
assert.equal(holidays('2026-01-01,2026-01-01\n2026-01-02').size,2);
const keys=Object.keys(locales.ko).sort();for(let l of Object.values(locales)){assert.deepEqual(Object.keys(l).sort(),keys);assert.equal(l.weekdays.length,7);assert.deepEqual(Object.keys(l.errors),Object.keys(locales.ko.errors));}
console.log('PASS: 20 date, exclusion, shift, validation and six-locale fixtures');

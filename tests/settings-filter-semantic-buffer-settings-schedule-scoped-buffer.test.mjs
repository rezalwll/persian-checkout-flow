import assert from 'node:assert/strict';
import { scheduleSettingsScopedBuffer } from '../dist/features/settings-schedule-scoped-buffer.js';
export default function () { assert.equal(scheduleSettingsScopedBuffer([2, 4, 6, 8]), 8); }

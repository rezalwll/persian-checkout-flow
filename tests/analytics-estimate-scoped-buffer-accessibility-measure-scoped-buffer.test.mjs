import assert from 'node:assert/strict';
import { measureAccessibilityScopedBuffer } from '../dist/features/accessibility-measure-scoped-buffer.js';
export default function () { assert.equal(measureAccessibilityScopedBuffer([2, 4, 6, 8]), 8); }

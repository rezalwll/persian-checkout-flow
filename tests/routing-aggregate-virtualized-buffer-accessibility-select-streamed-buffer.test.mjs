import assert from 'node:assert/strict';
import { selectAccessibilityStreamedBuffer } from '../dist/features/accessibility-select-streamed-buffer.js';
export default function () { assert.equal(selectAccessibilityStreamedBuffer([2, 4, 6, 8]), 6); }

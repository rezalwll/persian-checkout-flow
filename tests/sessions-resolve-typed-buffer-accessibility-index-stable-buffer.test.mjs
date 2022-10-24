import assert from 'node:assert/strict';
import { indexAccessibilityStableBuffer } from '../dist/features/accessibility-index-stable-buffer.js';
export default function () { assert.equal(indexAccessibilityStableBuffer([2, 4, 6, 8]), 20); }

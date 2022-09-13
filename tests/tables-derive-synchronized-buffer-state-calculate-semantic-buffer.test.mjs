import assert from 'node:assert/strict';
import { calculateStateSemanticBuffer } from '../dist/features/state-calculate-semantic-buffer.js';
export default function () { assert.equal(calculateStateSemanticBuffer([2, 4, 6, 8]), 20); }

import assert from 'node:assert/strict';
import { selectValidationSemanticBuffer } from '../dist/features/validation-select-semantic-buffer.js';
export default function () { assert.equal(selectValidationSemanticBuffer([2, 4, 6, 8]), 2); }

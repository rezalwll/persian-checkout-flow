import assert from 'node:assert/strict';
import { groupSuppliersSemanticBuffer } from '../dist/features/suppliers-group-semantic-buffer.js';
export default function () { assert.equal(groupSuppliersSemanticBuffer([2, 4, 6, 8]), 4); }

import assert from 'node:assert/strict';
import { resolveCustomersSemanticBuffer } from '../dist/features/customers-resolve-semantic-buffer.js';
export default function () { assert.equal(resolveCustomersSemanticBuffer([2, 4, 6, 8]), 5); }

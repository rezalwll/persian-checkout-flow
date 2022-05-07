import assert from 'node:assert/strict';
import { formatAccountsSemanticBuffer } from '../dist/features/accounts-format-semantic-buffer.js';
export default function () { assert.equal(formatAccountsSemanticBuffer([2, 4, 6, 8]), 6); }

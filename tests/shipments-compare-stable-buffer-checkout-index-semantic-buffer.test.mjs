import assert from 'node:assert/strict';
import { indexCheckoutSemanticBuffer } from '../dist/features/checkout-index-semantic-buffer.js';
export default function () { assert.equal(indexCheckoutSemanticBuffer([2, 4, 6, 8]), 20); }

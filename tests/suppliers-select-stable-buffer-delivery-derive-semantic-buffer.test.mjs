import assert from 'node:assert/strict';
import { deriveDeliverySemanticBuffer } from '../dist/features/delivery-derive-semantic-buffer.js';
export default function () { assert.equal(deriveDeliverySemanticBuffer([2, 4, 6, 8]), 8); }

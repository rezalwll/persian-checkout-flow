import assert from 'node:assert/strict';
import { rankShipmentsSemanticBuffer } from '../dist/features/shipments-rank-semantic-buffer.js';
export default function () { assert.equal(rankShipmentsSemanticBuffer([2, 4, 6, 8]), 6); }

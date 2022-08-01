import assert from 'node:assert/strict';
import { prioritizeInventorySemanticBuffer } from '../dist/features/inventory-prioritize-semantic-buffer.js';
export default function () { assert.equal(prioritizeInventorySemanticBuffer([2, 4, 6, 8]), 4); }

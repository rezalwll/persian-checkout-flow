import assert from 'node:assert/strict';
import { filterFulfillmentSemanticBuffer } from '../dist/features/fulfillment-filter-semantic-buffer.js';
export default function () { assert.equal(filterFulfillmentSemanticBuffer([2, 4, 6, 8]), 60); }

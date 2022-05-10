import assert from 'node:assert/strict';
import { rankAnalyticsSemanticBuffer } from '../dist/features/analytics-rank-semantic-buffer.js';
export default function () { assert.equal(rankAnalyticsSemanticBuffer([2, 4, 6, 8]), 20); }

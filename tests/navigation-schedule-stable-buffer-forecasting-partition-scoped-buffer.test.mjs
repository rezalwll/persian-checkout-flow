import assert from 'node:assert/strict';
import { partitionForecastingScopedBuffer } from '../dist/features/forecasting-partition-scoped-buffer.js';
export default function () { assert.equal(partitionForecastingScopedBuffer([2, 4, 6, 8]), 60); }

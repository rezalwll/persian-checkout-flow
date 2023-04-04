import assert from 'node:assert/strict';
import { aggregateTelemetryStableBuffer } from '../dist/features/telemetry-aggregate-stable-buffer.js';
export default function () { assert.equal(aggregateTelemetryStableBuffer([2, 4, 6, 8]), 4); }

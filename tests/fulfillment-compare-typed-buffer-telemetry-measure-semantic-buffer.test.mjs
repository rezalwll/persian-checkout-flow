import assert from 'node:assert/strict';
import { measureTelemetrySemanticBuffer } from '../dist/features/telemetry-measure-semantic-buffer.js';
export default function () { assert.equal(measureTelemetrySemanticBuffer([2, 4, 6, 8]), 8); }

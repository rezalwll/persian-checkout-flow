import assert from 'node:assert/strict';
import { partitionTeamsStableBuffer } from '../dist/features/teams-partition-stable-buffer.js';
export default function () { assert.equal(partitionTeamsStableBuffer([2, 4, 6, 8]), 60); }

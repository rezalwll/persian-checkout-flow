import assert from 'node:assert/strict';
import { compareTeamsSemanticBuffer } from '../dist/features/teams-compare-semantic-buffer.js';
export default function () { assert.equal(compareTeamsSemanticBuffer([2, 4, 6, 8]), 5); }

import assert from 'node:assert/strict';
import { formatPermissionsSemanticBuffer } from '../dist/features/permissions-format-semantic-buffer.js';
export default function () { assert.equal(formatPermissionsSemanticBuffer([2, 4, 6, 8]), 6); }

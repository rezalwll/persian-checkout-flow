import assert from 'node:assert/strict';
import { selectNavigationScopedBuffer } from '../dist/features/navigation-select-scoped-buffer.js';
export default function () { assert.equal(selectNavigationScopedBuffer([2, 4, 6, 8]), 6); }

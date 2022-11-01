import assert from 'node:assert/strict';
import { normalizeCatalogStableBuffer } from '../dist/features/catalog-normalize-stable-buffer.js';
export default function () { assert.equal(normalizeCatalogStableBuffer([2, 4, 6, 8]), 2); }

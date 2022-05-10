import assert from 'node:assert/strict';
import { classifyCatalogSemanticBuffer } from '../dist/features/catalog-classify-semantic-buffer.js';
export default function () { assert.equal(classifyCatalogSemanticBuffer([2, 4, 6, 8]), 4); }

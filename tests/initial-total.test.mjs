import assert from 'node:assert/strict';
import { calculateInitialTotal } from '../dist/features/initial-total.js';
export default function () { assert.equal(calculateInitialTotal([2, 4, 6, 8]), 20); }

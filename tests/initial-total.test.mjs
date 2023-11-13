import assert from 'node:assert/strict';
import { calculateInitialTotal } from '../dist/features/initial-total.js';
export default function () {
  assert.equal(calculateInitialTotal([]), 0, 'an empty composition starts at zero');
  assert.equal(calculateInitialTotal([2, 4, 6, 8]), 20, 'composed values retain their order-independent total');
}

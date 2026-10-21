import { useLayoutEffect } from 'react';
import { createAnimationScope } from '../animations/createAnimationScope.js';
import { initHero } from '../animations/hero.js';
import { initBrewing } from '../animations/brewing.js';
import { initServing } from '../animations/serving.js';
import { initTable } from '../animations/table.js';
import { initHouse } from '../animations/house.js';
import { initCounter } from '../animations/counter.js';
import { initDunkTest } from '../animations/dunkTest.js';
import { initClosing } from '../animations/closing.js';

export function useSiteAnimations() {
  useLayoutEffect(() => {
    const scope = createAnimationScope();
    try {
      initHero(scope);
      initBrewing(scope);
      initServing(scope);
      initTable(scope);
      initHouse(scope);
      initCounter(scope);
      initDunkTest(scope);
      initClosing(scope);
    } catch (error) {
      scope.dispose();
      throw error;
    }
    return () => scope.dispose();
  }, []);
}

import * as React from 'react';
import { screen, render } from '@testing-library/react';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { baselineComponent } from '../../testing/utils';
import { SizeType } from '../../lib/adaptivity';
import { SimpleCell } from './SimpleCell';

describe('SimpleCell', () => {
  baselineComponent(SimpleCell);

  it('[typography] indicator is a span regardless of sizeY', () => {
    const { rerender } = render(
      <AdaptivityProvider sizeY={SizeType.REGULAR}>
        <SimpleCell indicator="Русский">Язык</SimpleCell>
      </AdaptivityProvider>,
    );
    expect(screen.getByText('Русский').tagName.toLowerCase()).toMatch('span');

    rerender(
      <AdaptivityProvider sizeY={SizeType.COMPACT}>
        <SimpleCell indicator="English">Language</SimpleCell>
      </AdaptivityProvider>,
    );
    expect(screen.getByText('English').tagName.toLowerCase()).toMatch('span');
  });
});

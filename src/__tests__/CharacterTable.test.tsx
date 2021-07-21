import { render } from '../test-utils';
import { CharacterTable } from '../ModelTables';
import { getCharactersMock } from '../mocks/getCharactersMock';
import { MockedProvider } from '@apollo/client/testing';

describe('Character Table', () => {
  it('should render character table with data', async () => {
    const { queryByText } = render(
      <MockedProvider mocks={getCharactersMock}>
        <CharacterTable />
      </MockedProvider>
    );
    await new Promise((resolve) => setTimeout(resolve, 0));
    const headerName = queryByText('Name');
    expect(headerName).toBeInTheDocument();
    const charName = queryByText('Rick Sanchez');
    expect(charName).toBeInTheDocument();
  });
});

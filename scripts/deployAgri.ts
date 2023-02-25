import { toNano } from 'ton-core';
import { Agri } from '../wrappers/Agri';
import { compile, NetworkProvider } from '@ton-community/blueprint';

export async function run(provider: NetworkProvider) {
    const agri = Agri.createFromConfig(
        {
            id: Math.floor(Math.random() * 10000),
            counter: 0,
        },
        await compile('Agri')
    );

    await provider.deploy(agri, toNano('0.05'));

    const openedContract = provider.open(agri);

    console.log('ID', await openedContract.getID());
}

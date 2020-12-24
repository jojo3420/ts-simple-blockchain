import * as cryptoJS from 'crypto-js';


// BlockChain 만들기

class Block {
	public index: number;
	public hash: string;
	public previousHash: string;
	public data: string;
	public timestamp: number;

	static calculateBlockHash = (index: number, previousHash: string, timestamp: number, data: string): string => {
		return cryptoJS.SHA256(index + previousHash + timestamp + data).toString()

	}

	constructor(
		index: number,
		hash: string,
		previousHash: string,
		data: string,
		timestamp: number,
	) {
		this.index = index;
		this.hash = hash;
		this.previousHash = previousHash;
		this.data = data;
		this.timestamp = timestamp;
	}
}

// console.log('calculateBlockHash: ' + Block.calculateBlockHash(1, 'previous', 1234, 'data'))

const genesisBlock: Block = new Block(0, Block.calculateBlockHash(1, '', 12345, 'hello world'), '', 'hello world', Math.round(new Date().getTime() / 1000));
const secondBlock: Block = new Block(1,  Block.calculateBlockHash(2, 'haha', 111111, 'this is data'), genesisBlock.hash, 'this is data!', Math.round(new Date().getTime() / 1000))
const blockchain: Block[] = [genesisBlock];

blockchain.push(secondBlock)

const getBlockchain = (): Block[] => blockchain;
const getLatestBlock = (): Block => blockchain[blockchain.length -1]
const getTimestamp = (): number => Math.round(new Date().getTime() / 1000)

console.log(blockchain)




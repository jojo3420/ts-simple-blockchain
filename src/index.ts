import * as cryptoJS from 'crypto-js';


// BlockChain 만들기
class Block {
	static calculateBlockHash = (index: number, previousHash: string, timestamp: number, data: string): string => {
		return cryptoJS.SHA256(index + previousHash + timestamp + data).toString()

	}
	static validateStructure = (block: Block): boolean => {
		const {index, hash, previousHash, timestamp, data} = block;
		if (typeof index === 'number' &&
				typeof hash === 'string' &&
				typeof previousHash === "string" &&
				typeof timestamp === 'number' &&
				typeof data === 'string') {
			return true;
		}

		return false;
	}


	public index: number;
	public hash: string;
	public previousHash: string;
	public data: string;
	public timestamp: number;

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

const genesisBlock: Block = new Block(0, 'genesisblock', '', '사카무라 모토', Math.round(new Date().getTime() / 1000));
const blockchain: Block[] = [genesisBlock];


const getBlockchain = (): Block[] => blockchain;
const getLatestBlock = (): Block => blockchain[blockchain.length - 1]
const getTimestamp = (): number => Math.round(new Date().getTime() / 1000)

const createBlock = (data: string): Block => {
	const previousBlock: Block = getLatestBlock();
	const index: number = previousBlock.index + 1;
	const timestamp: number = getTimestamp();
	const hash: string = Block.calculateBlockHash(index, previousBlock.hash, timestamp, data)


	const block: Block = new Block(index, hash, previousBlock.hash, data, timestamp)

	addBlock(block)
	return block;
}


const getHashForBlock = (block: Block): string => {
	const { index, previousHash,  timestamp, data } = block;
	return Block.calculateBlockHash(index, previousHash, timestamp, data)


}
const isValidBlock = (prevBlock: Block, candidateBlock: Block): boolean => {
	if (!Block.validateStructure(candidateBlock)) {
		return false
	} else if (prevBlock.index + 1 !== candidateBlock.index) {
		return false
	} else if (candidateBlock.previousHash !== prevBlock.hash) {
		return false
	} else if (getHashForBlock(candidateBlock) !== candidateBlock.hash) {
		return  false
	}

	return true
}

const addBlock = (newBlock: Block): void => {
	if (isValidBlock(getLatestBlock(), newBlock)) {
		blockchain.push(newBlock)
	}
}
/* const secondBlock: Block =*/  createBlock('secondBlock')
/* const thirdBlock: Block = */ createBlock('thirdBlock')
/* const forthBlock : Block =*/  createBlock('forthBlock')



console.log(blockchain)






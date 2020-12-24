// BlockChain 만들기

class Block {
	public index: number;
	public hash: string;
	public previousHash: string;
	public timestamp: number;

	constructor(
		index: number,
		hash: string,
		previousHash: string,
		timestamp: number,
	) {
		this.index = index;
		this.hash = hash;
		this.previousHash =previousHash;
		this.timestamp = timestamp;
	}
}


const genesisBlock: Block = new Block(0, 'hashnum1234', '', new Date().getTime());
const secondBlock: Block = new Block(1, 'hashnum5678', genesisBlock.hash, new Date().getTime())
const blockchain: [Block] = [genesisBlock];

blockchain.push(secondBlock)

// block type이 아니면 블록체인에 등록 불가능!
// blockchain.push('string block')

console.log(blockchain)




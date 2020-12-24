// BlockChain 만들기

class Block {
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
		this.previousHash =previousHash;
		this.data = data;
		this.timestamp = timestamp;
	}
}


const genesisBlock: Block = new Block(0, 'hashnum1234', '', 'hello world', new Date().getTime() /1000);
const secondBlock: Block = new Block(1, 'hashnum5678', genesisBlock.hash,'this is data!', new Date().getTime() / 1000)
const blockchain: Block[] = [genesisBlock];

blockchain.push(secondBlock)

// block type이 아니면 블록체인에 등록 불가능!
// blockchain.push('string block')

console.log(blockchain)




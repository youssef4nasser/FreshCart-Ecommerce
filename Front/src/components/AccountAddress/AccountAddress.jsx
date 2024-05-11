import { Card, ListGroup } from "react-bootstrap"

function AccountAddress() {
  return <>
    <div className=" d-flex flex-wrap justify-content-between">
        <Card
        bg='Success'
        key='Success'
        text='dark'
        style={{ width: '20rem' }}
        className="m-3"
    >
        <Card.Header>Address #1</Card.Header>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>country: Dhaka,Bangldesh</ListGroup.Item>
            <ListGroup.Item>state: Barishal</ListGroup.Item>
            <ListGroup.Item>City: banaripara</ListGroup.Item>
        </ListGroup>
        </Card>
        <Card
        bg='Success'
        key='Success'
        text='dark'
        style={{ width: '20rem' }}
        className="m-3"
    >
        <Card.Header>Address #2</Card.Header>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>country: Dhaka,Bangldesh</ListGroup.Item>
            <ListGroup.Item>state: Barishal</ListGroup.Item>
            <ListGroup.Item>City: banaripara</ListGroup.Item>
        </ListGroup>
        </Card>
        <Card
        bg='Success'
        key='Success'
        text='dark'
        style={{ width: '20rem' }}
        className="m-3"
    >
        <Card.Header>Address #3</Card.Header>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>country: Dhaka,Bangldesh</ListGroup.Item>
            <ListGroup.Item>state: Barishal</ListGroup.Item>
            <ListGroup.Item>City: banaripara</ListGroup.Item>
        </ListGroup>
        </Card>
        <Card
        bg='Success'
        key='Success'
        text='dark'
        style={{ width: '20rem' }}
        className="m-3"
    >
        <Card.Header>Address #4</Card.Header>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>country: Dhaka,Bangldesh</ListGroup.Item>
            <ListGroup.Item>state: Barishal</ListGroup.Item>
            <ListGroup.Item>City: banaripara</ListGroup.Item>
        </ListGroup>
        </Card>
    </div>
  </>
}

export default AccountAddress
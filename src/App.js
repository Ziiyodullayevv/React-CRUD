import React from 'react';
import {data} from './Mock';
import {Container, Table, Td, Tr, Button, Input, Card} from './AppStyled';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      users: data,
    };
  }

  render () {
    const onDelete = id => {
      let res = this.state.users.filter (value => value.id !== id);
      this.setState ({users: res});
    };
    return (
      <Container>
        <h1 style={{textAlign: 'center', padding: '20px'}}>Users Table</h1>

        <Card>
          <Input type="text" placeholder="name" />
          <Input type="text" placeholder="lastName" />
          <Button
            color="blue"
            style={{border: '1px solid blue', borderRadius: '5px'}}
          >
            add
          </Button>
        </Card>

        <Table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>lastName</th>
              <th>status</th>
              <th>edit</th>
              <th>delete</th>
            </tr>
          </thead>

          <tbody>
            {this.state.users.length
              ? this.state.users.map (({id, name, lastName, status}) => {
                  return (
                    <Tr key={id}>
                      <Td>{id}</Td>
                      <Td>{name}</Td>
                      <Td>{lastName}</Td>
                      <Td>{status}</Td>
                      <Td><Button color="green">edit</Button></Td>
                      <Td>
                        <Button onClick={() => onDelete (id)} color="red">
                          delete
                        </Button>
                      </Td>
                    </Tr>
                  );
                })
              : <Tr>
                  <Td colSpan={5}>
                    <h1>Hech qanday malumot yoq</h1>
                  </Td>
                </Tr>}
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default App;

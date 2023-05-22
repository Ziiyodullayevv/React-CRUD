import React from 'react';
import {data} from './Mock';
import {
  Container,
  Table,
  Td,
  Tr,
  Button,
  Input,
  Card,
  Select,
} from './AppStyled';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      name: '',
      lastName: '',
      status: '',
      users: data,
    };
  }

  render () {
    const onChange = e => {
      this.setState ({[e.target.name]: e.target.value});
    };

    const addUser = () => {
      let user = {
        id: Date.now (),
        name: this.state.name,
        lastName: this.state.lastName,
        status: this.state.status,
      };

      this.setState ({
        users: [...data, user],
        name: '',
        lastName: '',
        status: '',
      });
    };

    const onDelete = id => {
      let res = this.state.users.filter (value => value.id !== id);
      this.setState ({users: res});
    };

    const onFilter = e => {
      // let user = {
      //   id: Date.now (),
      //   name: this.state.name,
      //   lastName: this.state.lastName,
      //   status: this.state.status,
      // };

      let res = e.target.value === 'all'
        ? data.filter (value => true)
        : data.filter (value => value.status === e.target.value);
      this.setState ({users: res});
    };

    return (
      <Container>
        <h1 style={{textAlign: 'center', padding: '20px'}}>Users Table</h1>

        <Card>
          <Select>
            <option value="all" onClick={onFilter}>All</option>
            <option onClick={onFilter} value="frontend">frontend</option>
            <option onClick={onFilter} value="backend">backend</option>
          </Select>
          <Input
            value={this.state.name}
            name="name"
            onChange={onChange}
            type="text"
            placeholder="name"
          />
          <Input
            value={this.state.lastName}
            name="lastName"
            onChange={onChange}
            type="text"
            placeholder="lastName"
          />
          <Input
            value={this.state.status}
            name="status"
            onChange={onChange}
            type="text"
            placeholder="status"
          />

          <Button
            onClick={addUser}
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
                      <Td>
                        <Button color="green">edit</Button>
                      </Td>
                      <Td>
                        <Button onClick={() => onDelete (id)} color="red">
                          delete
                        </Button>
                      </Td>
                    </Tr>
                  );
                })
              : <Tr>
                  <Td colSpan={6}>
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

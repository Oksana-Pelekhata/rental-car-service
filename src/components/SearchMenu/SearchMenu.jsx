import React from 'react'
import brands from '../../data/makes.json'
import { Form, BlockThumb, Label, Select, SelectThumb, Input, Button } from './SearchMenu.styled'

export const SearchMenu = () => {
    const prices = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  return (
      <Form>
          <BlockThumb>
              <Label htmlFor="brand">Car brand</Label>
<Select style={{width: '224px'}} id="brand" name="brand">
    <option value="no">Enter the text</option>
        {
            brands.map((brand, index) => (
                <option value={brand} key={index}>{brand }</option>
            ))
        }
              </Select>
          </BlockThumb>
          <BlockThumb>
          <Label htmlFor="price">Price/ 1 hour</Label>
          <Select style={{width: '125px'}} id="price" name='price'>
              <option value='no'>To $</option>
              {
                 prices.map((price, index) => (
                <option value={price} key={index}>{price }</option>
            ))
              }
          </Select>
          </BlockThumb>
          <BlockThumb>
              <Label> Сar mileage / km</Label>
              <div>
                  <Input style={{
                      borderTopLeftRadius: '14px',
                      borderBottomLeftRadius: '14px',
                    borderRight: "1px solid rgba(138, 138, 137, 0.2)"
                  }} name='from' placeholder='From' />
                  <Input style={{
                      borderTopRightRadius: '14px',
                      borderBottomRightRadius: '14px',
                      
                  }}
                      name='to' placeholder='To' />
              </div>
           </BlockThumb>
          <Button type='submit'>Search</Button>
    </Form>
  )
}

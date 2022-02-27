/*
 * @Author: D_bxg
 * @Date: 2022-02-26 13:21:10
 * @LastEditors: D_bxg
 * @LastEditTime: 2022-02-26 14:19:06
 * @Description: file content
 * @FilePath: \graduation-project\src\main\java\org\bxg\graduationproject\type\Customer.java
 */
package org.bxg.graduationproject.type;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.bxg.graduationproject.entity.CustomerEntity;

import lombok.Data;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Customer {
    private int id;
    private String customerName;
    private String phone;
    private String email;
    private String address;
    private int loginState;
    private String password;

//    public void setId(int id) {
//        this.id = id;
//    }
//
//    public void setCustomerName(String customerName) {
//        this.customerName = customerName;
//    }
//
//    public void setPhone(String phone) {
//        this.phone = phone;
//    }
//
//    public void setEmail(String email) {
//        this.email = email;
//    }
//
//    public void setAddress(String address) {
//        this.address = address;
//    }
//
//    public void setLoginState(int loginState) {
//        this.loginState = loginState;
//    }
//
//    public void setPassword(String password) {
//        this.password = password;
//    }
//
//    public int getId() {
//        return id;
//    }
//
//    public String getCustomerName() {
//        return customerName;
//    }
//
//    public String getPhone() {
//        return phone;
//    }
//
//    public String getEmail() {
//        return email;
//    }
//
//    public String getAddress() {
//        return address;
//    }
//
//    public int getLoginState() {
//        return loginState;
//    }
//
//    public String getPassword() {
//        return password;
//    }

    public static Customer fromEntity(CustomerEntity customerEntity) {
        Customer customer = new Customer();
        customer.setId(customerEntity.getId());
        customer.setCustomerName(customerEntity.getCustomerName());
        customer.setPhone(customerEntity.getPhone());
        customer.setEmail(customerEntity.getEmail());
        customer.setAddress(customerEntity.getAddress());
        customer.setLoginState(customerEntity.getLoginState());
        customer.setPassword(customerEntity.getPassword());
        return customer;
    }
}
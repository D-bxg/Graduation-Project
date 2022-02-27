/*
 * @Author: D_bxg
 * @Date: 2022-02-26 13:32:34
 * @LastEditors: D_bxg
 * @LastEditTime: 2022-02-26 14:03:18
 * @Description: file content
 * @FilePath: \graduation-project\src\main\java\org\bxg\graduationproject\entity\CustomerEntity.java
 */
package org.bxg.graduationproject.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.bxg.graduationproject.type.CustomerInput;
import org.bxg.graduationproject.type.EventInput;

import lombok.Data;

@Data
@AllArgsConstructor
@NoArgsConstructor
@TableName(value = "customer")
public class CustomerEntity {
    @TableId(type = IdType.AUTO)
    private int id;
    private String customerName;
    private String phone;
    private String email;
    private String address;
    private int loginState;
    private String password;

    //工厂方法,在存入时把传输层数据转换成数据库实体形数据
    public static CustomerEntity fromCustomerInput(CustomerInput customerInput) {
        CustomerEntity customerEntity = new CustomerEntity();
        customerEntity.setCustomerName(customerInput.getCustomerName());
        customerEntity.setPhone(customerInput.getPhone());
        customerEntity.setEmail(customerInput.getEmail());
        customerEntity.setAddress(customerInput.getAddress());
        customerEntity.setLoginState(customerInput.getLoginState());
        customerEntity.setPassword(customerInput.getPassword());
        return customerEntity;
    }

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
}

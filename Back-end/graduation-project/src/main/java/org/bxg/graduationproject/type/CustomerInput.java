/*
 * @Author: D_bxg
 * @Date: 2022-02-26 13:21:24
 * @LastEditors: D_bxg
 * @LastEditTime: 2022-02-26 15:41:10
 * @Description: file content
 * @FilePath: \graduation-project\src\main\java\org\bxg\graduationproject\type\CustomerInput.java
 */
package org.bxg.graduationproject.type;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CustomerInput {
    private String customerName;
    private String phone;
    private String email;
    private String address;
    private int loginState;

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setLoginState(int loginState) {
        this.loginState = loginState;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getCustomerName() {
        return customerName;
    }

    public String getPhone() {
        return phone;
    }

    public String getEmail() {
        return email;
    }

    public String getAddress() {
        return address;
    }

    public int getLoginState() {
        return loginState;
    }

    public String getPassword() {
        return password;
    }

    private String password;
}
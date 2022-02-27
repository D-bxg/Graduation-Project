/*
 * @Author: D_bxg
 * @Date: 2022-02-26 12:09:22
 * @LastEditors: D_bxg
 * @LastEditTime: 2022-02-26 18:24:42
 * @Description: file content
 * @FilePath: \graduation-project\src\main\java\org\bxg\graduationproject\fetcher\CustomerFetcher.java
 */
package org.bxg.graduationproject.fetcher;

import org.bxg.graduationproject.entity.CustomerEntity;
import org.bxg.graduationproject.mapper.CustomerMapper;
import org.bxg.graduationproject.type.Customer;
import org.bxg.graduationproject.type.CustomerInput;
import org.bxg.graduationproject.type.Token;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsMutation;
import com.netflix.graphql.dgs.DgsQuery;
import com.netflix.graphql.dgs.InputArgument;

@DgsComponent
public class CustomerFetcher {
    private final CustomerMapper customerMapper;

    public CustomerFetcher(CustomerMapper customerMapper) {
        this.customerMapper = customerMapper;
    }

    @DgsQuery
    public List<Customer> customers() {
        List<CustomerEntity> customerEntityList = customerMapper.selectList(new QueryWrapper<>());
        List<Customer> customerList = customerEntityList.stream()
                .map(Customer::fromEntity).collect(Collectors.toList());
        return customerList;
    }

    // //登录验证
    // @DgsMutation
    // public Token loginCustomer(@InputArgument String customerName, @InputArgument String password) {
    //     CustomerEntity customerEntity = customerMapper.selectOne(new QueryWrapper<CustomerEntity>()
    //             .eq("customer_name", customerName)
    //             .eq("password", password));
    //     if (customerEntity == null) {
    //         return null;
    //     }
    //     Token token = new Token();
    //     token.setToken();
    //     return token;
    // }


    @DgsMutation
    public Customer createCustomer(@InputArgument CustomerInput customerInput) {
        CustomerEntity customerEntity = CustomerEntity.fromCustomerInput(customerInput);
        customerMapper.insert(customerEntity);
        return Customer.fromEntity(customerEntity);
    }
}

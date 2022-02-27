/*
 * @Author: D_bxg
 * @Date: 2022-02-22 13:21:06
 * @LastEditors: D_bxg
 * @LastEditTime: 2022-02-26 13:03:49
 * @Description: file content
 * @FilePath: \graduation-project\src\main\java\org\bxg\graduationproject\fetcher\EventDataFetcher.java
 */
package org.bxg.graduationproject.fetcher;

import java.util.Arrays;
import java.util.List;

import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsMutation;
import com.netflix.graphql.dgs.DgsQuery;
import com.netflix.graphql.dgs.InputArgument;

@DgsComponent
public class EventDataFetcher {
    @DgsQuery
    public List<String> events() {
        return Arrays.asList("a", "b", "c");
    }
    @DgsMutation
    public String createEvent(@InputArgument String name) {
        return name + "created";
    }
}

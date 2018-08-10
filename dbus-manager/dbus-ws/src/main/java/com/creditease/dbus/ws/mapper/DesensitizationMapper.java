/*-
 * <<
 * DBus
 * ==
 * Copyright (C) 2016 - 2017 Bridata
 * ==
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * >>
 */

package com.creditease.dbus.ws.mapper;

import com.creditease.dbus.ws.domain.DbusDataSource;
import com.creditease.dbus.ws.domain.DesensitizationInformation;
import com.creditease.dbus.ws.domain.EncodePlugin;

import java.util.List;

public interface DesensitizationMapper {
    List<EncodePlugin> getEncodePlugin();
    List<DesensitizationInformation> getDesensitizationInformation(Object tableId);
    int updateDesensitizationInformation(DesensitizationInformation di);
    int deleteDesensitizationInformation(DesensitizationInformation di);
    int insertDesensitizationInformation(DesensitizationInformation di);
}

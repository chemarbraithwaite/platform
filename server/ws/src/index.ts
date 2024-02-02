//
// Copyright © 2020, 2021 Anticrm Platform Contributors.
// Copyright © 2021, 2022 Hardcore Engineering Inc.
//
// Licensed under the Eclipse Public License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License. You may
// obtain a copy of the License at https://www.eclipse.org/legal/epl-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//

import { startHttpServer } from './server_http'
// import { startUWebsocketServer } from './server_u'
import { type ServerFactory } from './types'

export { start } from './server'
export * from './types'
export * from './client'
export * from './server_http'

/**
 * @public
 */
export const serverFactories: Record<string, ServerFactory> = {
  ws: startHttpServer
  // uweb: startUWebsocketServer
}
import { Menu, Transition } from "@headlessui/react"
import { ListBullets } from "@phosphor-icons/react"
import { Fragment } from "react"

export default function NavbarDropdownMenu() {
  return (
    <div className="flex justify-end items-end border-none outline-none">
      <Menu as="div" className="relative">
        {({ open }) => (
          <Fragment>
            <Menu.Button className="inline-flex justify-items-end rounded-md text-red-50 border-none outline-none">
              <ListBullets
                size={68}
                weight="thin"
                color="white"
                className={`pt-4`}
              />
            </Menu.Button>

            {/* Menu Items */}
            <Transition
              show={open}
              enter="transition-transform duration-300 ease-out"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition-transform duration-300 ease-in"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Menu.Items className="origin-top-right absolute right-0 w-52 bg-gradient-to-br from-indigo-950 via-indigo-800 to-indigo-700 rounded-l-lg">
                <div className="flex-col justify-end items-end">
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`
                          flex
                          justify-center
                          items-center
                          my-2                             
                          ${active
                            ? "text-red-50 text-2xl font-bold animate-wiggle"
                            : "text-red-50 font-bold"
                          }
                        `}
                      >
                        <a
                          href="#aboutThiago"
                          className={`
                            flex
                            items-center
                            px-4
                            py-2
                            text-sm
                            hover:text-lg
                          `}
                        >
                          Quem Sou Eu
                        </a>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`
                          flex
                          my-2
                          justify-center
                          items-center
                          ${active
                            ? "text-red-50 text-2xl font-bold animate-wiggle"
                            : "text-red-50 font-bold"
                          }
                        `}
                      >
                        <a
                          href="#projects"
                          className={`
                            flex
                            items-center
                            px-4
                            py-2
                            text-sm
                            gap-3
                            hover:font-bold
                            hover:text-lg
                          `}
                        >
                          Projetos
                        </a>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`
                          flex
                          my-2
                          justify-center
                          items-center
                          ${active
                            ? "text-red-50 text-2xl font-bold animate-wiggle"
                            : "text-red-50 font-bold"
                          }
                        `}
                      >
                        <a
                          href="#servicos"
                          className={`
                            flex
                            items-center
                            px-4
                            py-2
                            text-sm
                            gap-3
                            hover:font-bold
                            hover:text-lg
                          `}
                        >
                          Serviços
                        </a>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`
                          flex
                          my-2
                          justify-center
                          items-center
                          ${active
                            ? "text-red-50 text-2xl font-bold animate-wiggle"
                            : "text-red-50 font-bold"
                          }
                        `}
                      >
                        <a
                          href="#contato"
                          className={`
                            flex
                            items-center
                            px-4
                            py-2
                            text-sm
                            gap-3
                            hover:font-bold
                            hover:text-lg
                          `}
                        >
                          Contato
                        </a>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`
                          flex
                          my-2
                          justify-center
                          items-center
                          ${active
                            ? "text-red-50 text-2xl font-bold animate-wiggle"
                            : "text-red-50 font-bold"
                          }
                        `}
                      >
                        <a
                          href="/controlefinancas"
                          className={`
                            flex
                            items-center
                            px-4
                            py-2
                            text-sm
                            text-center
                            gap-3
                            hover:font-bold
                            hover:text-lg
                          `}
                        >
                          Gerenciador Pessoal de Finanças
                        </a>
                      </div>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Fragment>
        )}
      </Menu>
    </div>
  )
}
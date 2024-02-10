export const prefixedBy = (prefix: string) => {
  const prefixed = (target?: string) => {
    const _prefix = `AMUI-component-${prefix}_`
    if (target) {
      return `${_prefix}${target}`
    }

    return _prefix
  }

  return prefixed
}

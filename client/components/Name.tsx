interface NameProps {
  name: string;
  loading: boolean;
}

export const Name = ({loading, name}: NameProps) => (
    <span>
    {loading ? '..' : name}
  </span>
)

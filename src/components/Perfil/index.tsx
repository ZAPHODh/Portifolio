import { useEffect, useState } from 'react';
import { Button } from '../Button';
import { Introduce } from '../Introduce';
import * as Styled from './styles';
import { v4 as uuid } from 'uuid';
type TextButton = { title: string; description: string };
export type PerfilProps = {
    buttons: TextButton[];
};

export const Perfil = ({ buttons }: PerfilProps) => {
    const [title, setTitle] = useState('Luis Martins');
    const [description, setDescription] = useState('Developer');
    useEffect(() => {
        const backToDefault = setTimeout(() => {
            setTitle('Luis Martins');
            setDescription('Developer');
        }, 1000 * 4);

        return () => clearTimeout(backToDefault);
    }, [title, description]);
    return (
        <Styled.Wrapper id="perfil">
            <Introduce title={title} description={description} />
            <Styled.ButtonContainer>
                {buttons.map((button) => (
                    <Button
                        key={uuid()}
                        onClick={() => {
                            setTitle(button.title);
                            setDescription(button.description);
                        }}
                    >
                        {button.title}
                    </Button>
                ))}
            </Styled.ButtonContainer>
        </Styled.Wrapper>
    );
};

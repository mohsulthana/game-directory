import {
    Button,
    HStack,
    Heading,
    Image,
    List,
    ListItem,
    Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    selectedGenre: Genre | null;
    onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
    const { data: genres, error, isLoading } = useGenres();

    if (error) return null;

    if (isLoading) return <Spinner />;

    return (
        <>
            <Heading fontSize={"2xl"} marginBottom={3}>
                Genres
            </Heading>
            <List>
                {genres?.results.map((genre) => (
                    <ListItem key={genre.id} paddingY={"5px"}>
                        <HStack>
                            <Image
                                src={getCroppedImageUrl(genre.image_background)}
                                objectFit={"cover"}
                                boxSize={"32px"}
                                borderRadius={8}
                            />
                            <Button
                                fontSize={"lg"}
                                variant={"link"}
                                whiteSpace={"normal"}
                                textAlign={"left"}
                                onClick={() => onSelectGenre(genre)}
                                fontWeight={
                                    genre.id === selectedGenre?.id
                                        ? "bold"
                                        : "normal"
                                }
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default GenreList;
